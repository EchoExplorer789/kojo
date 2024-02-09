import React, { useEffect, useRef, useState } from 'react';

function TradingViewWidget({ asdid }) {
  const container = useRef();
  const [tradingViewWidget, setTradingViewWidget] = useState(null);

  useEffect(() => {
    const loadTradingViewScript = async () => {
      // Check if the TradingView widget is already created
      if (tradingViewWidget) {
        console.log(asdid.toLocaleUpperCase());
        // Update the symbol when the asdid prop changes
        tradingViewWidget.onChartReady(() => {
          tradingViewWidget.chart().setSymbol(`BINANCE:${asdid.toLocaleUpperCase()}USDT`);
        });
      } else {
        // Create the TradingView widget if it doesn't exist
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;

        script.onload = () => {
          const widget = new window.TradingView.widget({
            autosize: true,
            symbol: `BINANCE:${asdid.toLocaleUpperCase()}USDT`,
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            support_host: "https://www.tradingview.com",
          });

          setTradingViewWidget(widget);
        };

        container.current.appendChild(script);
      }
    };

    loadTradingViewScript();
  }, [asdid, tradingViewWidget]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "100vh", width: "100%" }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default TradingViewWidget;
