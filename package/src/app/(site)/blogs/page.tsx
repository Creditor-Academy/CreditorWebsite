import BlogsPage from "@/app/components/Blogs"; // Added quotes and matched the export name
import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";



export const metadata: Metadata = pageMetadata("/blogs");

export default function Page() {
    return (
        <main>
            <BlogsPage />
        </main>
    );
}