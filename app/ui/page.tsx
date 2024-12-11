import Link from "next/link";

const components = [
  {
    name: "Button",
    href: "/ui/button",
    description: "Button component with different variants and states.",
  },
  {
    name: "Select",
    href: "/ui/select",
    description: "Select component for choosing from a list of options.",
  },
];

export default function UIPage() {
  return (
    <div className="w-full h-full p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">UI Components</h1>
        <p className="text-muted-foreground mt-2">
          A collection of pre-built components for your application.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component) => (
          <Link
            key={component.name}
            href={component.href}
            className="block p-4 rounded-lg border hover:border-primary transition-colors"
          >
            <h2 className="text-lg font-semibold">{component.name}</h2>
            <p className="text-muted-foreground mt-1">{component.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
