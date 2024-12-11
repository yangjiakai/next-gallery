import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Button</h1>
        <p className="text-muted-foreground mt-2">
          A button component with different variants and states.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">States</h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button>
              <span className="animate-spin mr-2">⏳</span>
              Loading
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
