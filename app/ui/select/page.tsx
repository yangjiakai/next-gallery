import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Select</h1>
        <p className="text-muted-foreground mt-2">
          A select component for choosing from a list of options.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Select</h2>
          <div className="w-[240px]">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
          <div className="w-[240px]">
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
