// "use client";

// import { useEffect, useState } from "react";
// import { AppSidebar } from "@/components/dashboard/dashboard-sidebar";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const [role, setRole] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchUserRole() {

//     }

//     fetchUserRole();
//   }, []);

//   if (loading) return <div className="flex justify-center items-center h-screen text-xl">
//     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//     </svg>
//     Loading...
//     </div>;

//   return (
//     <div className="flex min-h-screen">
//         <SidebarProvider>
//         <AppSidebar role={"student"} />
//         <main className="flex-1 p-4">
//             <SidebarTrigger />
//             <div className="m-2">
//               {children}
//             </div>
//         </main>
//         </SidebarProvider>       
//     </div>
//   );
// }