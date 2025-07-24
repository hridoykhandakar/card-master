// src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
      <p className="mb-4">This is the home page that anyone can access.</p>

      <div className="space-x-4">
        <Button asChild>
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
