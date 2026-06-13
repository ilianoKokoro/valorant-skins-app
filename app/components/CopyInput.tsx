"use client";

type CopyInputProps = {
  value: string;
};

export default function CopyInput({ value }: CopyInputProps) {
  const copy = async () => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <div className="join w-full">
      <input
        type="text"
        value={value}
        readOnly
        className="input input-bordered join-item w-fit min-w-80"
      />
      <button className="btn join-item" onClick={copy}>
        Copy
      </button>
    </div>
  );
}
