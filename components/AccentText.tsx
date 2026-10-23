// Renders text in the design's headline style: the last word in bronze italic, ending with a period.
// "Product Models" → Product <em>Models.</em>
export default function AccentText({ text }: { text: string }) {
  const clean = text.trim().replace(/\.$/, "");
  const splitAt = clean.lastIndexOf(" ");
  const lead = splitAt === -1 ? "" : clean.slice(0, splitAt + 1);
  const accent = splitAt === -1 ? clean : clean.slice(splitAt + 1);

  return (
    <>
      {lead}
      <span className="font-headline italic font-normal text-bronze">{accent}.</span>
    </>
  );
}
