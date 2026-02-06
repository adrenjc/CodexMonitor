import { getCurrentWindow } from "@tauri-apps/api/window";
import { isWindowsPlatform } from "../../../utils/shortcuts";

export function WindowsControls() {
  if (!isWindowsPlatform()) {
    return null;
  }

  const appWindow = getCurrentWindow();

  const handleMinimize = () => {
    void appWindow.minimize();
  };

  const handleMaximize = async () => {
    const isMaximized = await appWindow.isMaximized();
    if (isMaximized) {
      void appWindow.unmaximize();
    } else {
      void appWindow.maximize();
    }
  };

  const handleClose = () => {
    void appWindow.close();
  };

  return (
    <div className="window-controls">
      <button
        className="window-control-btn minimize"
        onClick={handleMinimize}
        aria-label="Minimize"
      >
        <svg width="10" height="1" viewBox="0 0 10 1">
          <rect fill="currentColor" width="10" height="1" />
        </svg>
      </button>
      <button
        className="window-control-btn maximize"
        onClick={() => void handleMaximize()}
        aria-label="Maximize"
      >
        <svg width="10" height="10" viewBox="0 0 10 10">
          <rect
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            x="0.5"
            y="0.5"
            width="9"
            height="9"
          />
        </svg>
      </button>
      <button
        className="window-control-btn close"
        onClick={handleClose}
        aria-label="Close"
      >
        <svg width="10" height="10" viewBox="0 0 10 10">
          <path
            fill="currentColor"
            d="M1.41 0L0 1.41 3.59 5 0 8.59 1.41 10 5 6.41 8.59 10 10 8.59 6.41 5 10 1.41 8.59 0 5 3.59z"
          />
        </svg>
      </button>
    </div>
  );
}
