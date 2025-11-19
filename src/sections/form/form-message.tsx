// ----------------------------------------------------------------------

export default function FormMessage() {
  return (
    <form className="w-full flex flex-col border-y border-background divide-y divide-background">
      <div className="flex">
        <p className="pt-2 text-xs uppercase w-1/3 border-r border-background">
          Name
        </p>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          required
          className="text-xs pl-2 py-2 bg-foreground w-2/3 placeholder:opacity-50 placeholder:uppercase border-none outline-none"
        />
      </div>

      <div className="flex divider-background">
        <p className="pt-2 text-xs uppercase w-1/3 border-r border-background">
          Email
        </p>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          required
          className="text-xs pl-2 py-2 bg-foreground w-2/3 placeholder:opacity-50 placeholder:uppercase border-none outline-none"
        />
      </div>

      <div className="flex divider-background">
        <p className="pt-2 text-xs uppercase w-1/3 border-r border-background">
          Message
        </p>
        <textarea
          name="message"
          placeholder="What you want to share?"
          required
          rows={7}
          className="resize-none text-xs pl-2 py-2 bg-foreground w-2/3 placeholder:opacity-50 placeholder:uppercase border-none outline-none"
        />
      </div>
    </form>
  );
}
