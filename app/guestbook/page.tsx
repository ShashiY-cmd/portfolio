import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function GuestbookPage() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Guestbook</h1>
      <p className="leading-7  text-muted-foreground mt-2">
        Sign my Guestbook!
      </p>
      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label>Message</Label>
        </CardHeader>
      </Card>
    </section>
  );
}
