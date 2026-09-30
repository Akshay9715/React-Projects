import { Link } from "react-router-dom";

const projects = [
  {
    name: "Accordion",
    path: "/accordian",
    description: "Practice expandable and collapsible sections",
  },
  {
    name: "Random Color Generator",
    path: "/random-color-generator",
    description: "Generate random HEX and RGB colors",
  },
  {
    name: "Star Rating",
    path: "/star-rating",
    description: "Build an interactive star rating component",
  },
  {
    name: "Image Slider",
    path: "/image-slider",
    description: "Create an image carousel with navigation",
  },
  {
    name: "Load More Data",
    path: "/load-more-data",
    description: "Practice API calls and pagination",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-sky-500 px-5 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            React Projects
          </h1>

          <p className="mt-3 text-lg text-sky-100">
            A collection of projects built while learning React
          </p>
        </header>

        {/* Project List */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.path}>
              <Link
                to={project.path}
                className="group block rounded-xl bg-white p-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
              >
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-sky-600">
                  {project.name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {project.description}
                </p>

                <span className="mt-4 inline-block font-semibold text-sky-500">
                  Open Project →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
