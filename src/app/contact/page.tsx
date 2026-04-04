"use client";

import { Suspense } from "react";
import ContactPageContent from "./ContactPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading contact form...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
