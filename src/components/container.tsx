interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center -my-40">
      {children}
    </div>
  );
};

export default Container;
