import { Toaster as Toast, ToasterProps } from "react-hot-toast";

const Toaster: React.FC<ToasterProps> = (props) => {
  const sizingStyles = {
    maxWidth: "432px",
    minWidth: "150px",
    padding: "8px 16px",
  };
  const getStyles = (bgColor: string) => ({
    style: {
      background: bgColor,
      color: "rgb(var(--white))",
      ...sizingStyles,
    },
    iconTheme: {
      primary: "rgb(var(--white))",
      secondary: bgColor,
    },
  });

  return (
    <Toast
      position="bottom-right"
      toastOptions={{
        success: {
          duration: 3000,
          ...getStyles("rgb(var(--success-bg-dark))"),
        },
        error: { duration: 3000, ...getStyles("rgb(var(--error-bg-dark))") },
        loading: { style: sizingStyles },
      }}
      containerStyle={{
        top: 60,
        left: 20,
        bottom: 40,
        right: 20,
      }}
      {...props}
    />
  );
};

export { Toaster };
export * from "./toast";
