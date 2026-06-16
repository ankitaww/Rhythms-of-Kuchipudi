"use client";

import { useState } from "react";
import { ph } from "@/lib/content";

export type Teacher = {
  name: string;
  role: string;
  bio: string;
};

export default function TeacherCard({
  teacher,
  ringClass,
}: {
  teacher: Teacher;
  ringClass: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      className="group flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-sm outline-none transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-pink"
    >
      <div className={`rounded-full bg-gradient-to-br p-1 ${ringClass}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ph(300, 300, teacher.name.split(" ")[0])}
          alt={teacher.name}
          className="h-32 w-32 rounded-full object-cover"
        />
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold text-purple">
        {teacher.name}
      </h3>
      <p className="font-eyebrow text-xs uppercase tracking-[0.2em] text-pink">
        {teacher.role}
      </p>
      <div
        className={`grid transition-all duration-300 ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden font-body text-sm text-deep-navy/75">
          {teacher.bio}
        </p>
      </div>
    </article>
  );
}
