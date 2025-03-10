type Props = {
    children?: React.ReactNode;
  };
  
  export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    );
  }
