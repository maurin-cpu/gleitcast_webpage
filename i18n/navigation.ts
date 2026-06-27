import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-bewusste Navigations-APIs. <Link href="/impressum"> wird je nach
// aktiver Sprache automatisch zu /impressum, /fr/impressum oder /it/impressum.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
