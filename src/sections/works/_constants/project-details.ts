import maweedCover from "@/assets/projects/maweed-cover.png";
import najmAccountingAccounts from "@/assets/projects/najm-erp/najm-accounting-accounts.png";
import najmHrManagement from "@/assets/projects/najm-erp/najm-hr-management.png";
import najmLogin from "@/assets/projects/najm-erp/najm-login.png";
import najmMedia from "@/assets/projects/najm-erp/najm-media.png";
import najmErpCover from "@/assets/projects/najm-erp-cover.png";
import najmUsers from "@/assets/projects/najm-erp/najm-users.png";
import najmWebManagement from "@/assets/projects/najm-erp/najm-web-management.png";
import shabakatAreas from "@/assets/projects/shabakat/shabakat-areas.png";
import shabakatSettings from "@/assets/projects/shabakat/shabakat-settings.png";
import shabakatDashboard from "@/assets/projects/shabakat/shabakat-dashboard.png";
import shabakatCover from "@/assets/projects/shabakat-cover.png";
import shabakatInvoices from "@/assets/projects/shabakat/shabakat-invoices.png";
import shabakatLogin from "@/assets/projects/shabakat/shabakat-login.png";
import shabakatSubscribers from "@/assets/projects/shabakat/shabakat-subs.png";

export type ProjectDetail = {
	slug: string;
	title: string;
	category: string;
	summary: string;
	cover: string;
	coverImageClassName?: string;
	intro: string;
  problem?: string;
  solution?: string;
  highlights: string[];
  featureGroups?: Array<{
    title: string;
    items: string[];
  }>;
  technicalHighlights?: string[];
  impact?: string[];
  screens: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "najm-erp-system",
    title: "Najm ERP System",
		category: "Complete ERP Platform for Non-Profit & Organization Management",
		summary:
			"A centralized platform for managing accounting, employees, payroll, website content, donors, grants, and daily operations from a single dashboard.",
		cover: najmErpCover,
		coverImageClassName:
			"mx-auto h-full w-full max-w-[86%] object-contain object-center p-4 md:max-w-[72%] md:p-6",
		intro:
      "Najm ERP combines accounting, HR, payroll, donor management, and website administration into a single platform, allowing teams to manage their entire organization from one place.",
    problem:
      "Many organizations manage accounting, employee records, donor information, and website updates across multiple disconnected tools, spreadsheets, and manual processes. This leads to duplicated work, reporting difficulties, and operational inefficiencies.",
    solution:
      "Najm ERP brings finance, people operations, access control, and website administration into one operational dashboard so teams can run the organization without jumping between systems.",
    highlights: [
      "Accounting, HR, payroll, donor management, and website administration in one platform",
      "Role-based access control for departments and operational responsibilities",
      "Website content can be managed without developer intervention",
    ],
    featureGroups: [
      {
        title: "Accounting & Finance",
        items: [
          "Chart of Accounts",
          "Journal Entries",
          "General Ledger",
          "Trial Balance",
          "Balance Sheet",
          "Income Statement",
          "Grants Management",
          "Donor Tracking",
          "Financial Reports",
        ],
      },
      {
        title: "Human Resources",
        items: [
          "Employee Management",
          "Salary Management",
          "Payroll Automation",
          "Attendance Tracking",
          "Employee Records",
        ],
      },
      {
        title: "Access Control",
        items: [
          "User Management",
          "Roles & Permissions",
          "Department Access Control",
        ],
      },
      {
        title: "Website Management",
        items: [
          "Update website content directly from the dashboard",
          "Manage pages and content without developer intervention",
          "Dynamic website administration",
        ],
      },
      {
        title: "Reporting",
        items: [
          "Financial Reports",
          "Employee Reports",
          "Organization-wide Insights",
        ],
      },
    ],
    technicalHighlights: [
      "Role-based Access Control (RBAC)",
      "Multi-module ERP Architecture",
      "Dynamic Website Content Management",
      "Automated Payroll Calculations",
      "Financial Reporting System",
    ],
    impact: [
      "Centralized multiple operational systems into one platform",
      "Reduced manual accounting workflows",
      "Automated payroll calculations",
      "Enabled non-technical staff to manage website content",
      "Improved visibility across organizational operations",
    ],
    screens: [
      {
        title: "Dashboard",
        description:
          "Main entry point used to access the ERP platform securely and manage organization-wide operations from a centralized environment.",
        image: najmLogin,
      },
      {
        title: "Accounting (Chart of Accounts)",
        description:
          "Accounting module for managing the chart of accounts, financial structure, and the foundations of organization-wide reporting.",
        image: najmAccountingAccounts,
      },
      {
        title: "Journal Entries",
        description:
          "The accounting workflow supports journals, recurring entries, payment methods, grants, donors, and the surrounding financial operations required by the organization.",
        image: najmAccountingAccounts,
      },
      {
        title: "Employee Management",
        description:
          "HR module for managing employee records, statuses, assignments, and organization-wide people operations.",
        image: najmHrManagement,
      },
      {
        title: "Payroll",
        description:
          "Payroll sits inside the HR module to support salary workflows, automated payroll calculations, and employee compensation management.",
        image: najmHrManagement,
      },
      {
        title: "Website Management",
        description:
          "Website pages and content can be updated directly from the dashboard without relying on developer intervention.",
        image: najmWebManagement,
      },
      {
        title: "Access Control & Users",
        description:
          "User and permission management gives different departments the right level of access across the ERP.",
        image: najmUsers,
      },
      {
        title: "Media Center",
        description:
          "Centralized media management supports the dynamic website administration and content workflows inside the platform.",
        image: najmMedia,
      },
      {
        title: "System overview",
        description:
          "High-level product presentation showing how the platform brings accounting, HR, payroll, donor management, and website administration together.",
        image: najmErpCover,
      },
    ],
  },
  {
    slug: "maweed",
    title: "Maweed",
    category: "Clinic Management Platform",
    summary:
      "A modern platform that helps clinics manage appointments, patients, billing, treatment plans, and daily operations from a single dashboard.",
    cover: maweedCover,
    intro:
      "Maweed centralizes clinic operations into one platform, allowing staff and doctors to manage patients, appointments, payments, and treatment plans efficiently.",
    problem:
      "Many clinics still rely on paper records, spreadsheets, and manual communication to manage appointments, patient information, and billing. This creates scheduling conflicts, missed appointments, and unnecessary administrative work.",
    solution:
      "Maweed brings scheduling, patient management, billing, treatment planning, and communication into one operational system so clinics can work from a single source of truth.",
    highlights: [
      "Appointments, patients, billing, and treatment plans in one clinic platform",
      "Built to reduce manual scheduling work and administrative overhead",
      "Supports clinic growth with automation, localization, and multi-doctor workflows",
    ],
    featureGroups: [
      {
        title: "Appointment Management",
        items: [
          "Daily, weekly, and monthly calendar views",
          "Appointment scheduling",
          "Walk-in appointments",
          "Custom appointment durations",
          "Appointment status tracking",
          "Conflict prevention",
        ],
      },
      {
        title: "Patient Management",
        items: [
          "Patient profiles",
          "Medical history",
          "Contact information",
          "Priority levels",
          "Notes and records",
        ],
      },
      {
        title: "Billing & Payments",
        items: [
          "Invoice generation",
          "Payment tracking",
          "Partial payments",
          "Outstanding balances",
          "Financial records",
        ],
      },
      {
        title: "Treatment Plans",
        items: [
          "Multi-step treatment plans",
          "Progress tracking",
          "Completion status management",
          "Treatment notes",
        ],
      },
      {
        title: "Communication",
        items: [
          "Automated WhatsApp reminders",
          "Appointment notifications",
          "Reminder scheduling",
        ],
      },
      {
        title: "Multi-Doctor Support",
        items: [
          "Doctor schedules",
          "Appointment allocation",
          "Clinic-wide management",
        ],
      },
      {
        title: "Reporting & Operations",
        items: [
          "Patient activity tracking",
          "Payment records",
          "Appointment insights",
          "Administrative workflows",
        ],
      },
      {
        title: "Localization",
        items: ["Arabic & English support", "RTL support"],
      },
    ],
    technicalHighlights: [
      "Multi-tenant SaaS architecture",
      "Role-based access control",
      "Docker deployment",
      "Automated backups",
      "Responsive design",
      "Secure authentication",
      "PostgreSQL database",
    ],
    impact: [
      "Built as a real SaaS product",
      "Designed for daily clinic operations",
      "Reduces manual scheduling work",
      "Centralizes patient and billing management",
      "Supports clinic growth through automation",
    ],
    screens: [
      {
        title: "Platform overview",
        description:
          "Current public-safe preview of Maweed. Detailed clinic screenshots can be added later when shareable versions are available.",
        image: maweedCover,
      },
    ],
  },
  {
    slug: "shabakat",
    title: "Shabakat",
    category: "Operations Platform for Generator Providers",
    summary:
      "A centralized platform for managing subscribers, billing, invoices, collections, payments, and automated customer reminders.",
    cover: shabakatCover,
    intro:
      "Shabakat centralizes subscriber management, billing operations, invoice generation, payment tracking, and automated reminders into a single platform that helps operators manage their business more efficiently.",
    problem:
      "Generator providers often manage subscribers, invoices, payments, and monthly collections manually through spreadsheets, notebooks, and WhatsApp messages. As the number of subscribers grows, tracking payments, overdue accounts, and monthly billing becomes increasingly difficult.",
    solution:
      "Shabakat brings subscriber operations, billing, collections, invoices, and reminders together in one system so operators can manage recurring monthly work from a centralized workflow.",
    highlights: [
      "Centralized subscriber, area, invoice, and collection workflows",
      "Operational dashboard for billing, revenue, and overdue visibility",
      "Automated customer reminders and notification flows",
    ],
    featureGroups: [
      {
        title: "Subscriber Management",
        items: [
          "Subscriber profiles",
          "Contact information",
          "Subscription plans",
          "Service history",
          "Search and filtering",
        ],
      },
      {
        title: "Area Management",
        items: [
          "Organize subscribers by area",
          "Assign customers to service zones",
          "Manage area-based operations",
        ],
      },
      {
        title: "Billing & Invoicing",
        items: [
          "Generate invoices",
          "Download PDF invoices",
          "Print invoices",
          "Monthly billing workflows",
          "Invoice history",
        ],
      },
      {
        title: "Payment Tracking",
        items: [
          "Track paid and unpaid accounts",
          "Outstanding balances",
          "Collection status monitoring",
          "Monthly revenue overview",
        ],
      },
      {
        title: "Dashboard & Reporting",
        items: [
          "Revenue analytics",
          "Collection rates",
          "Subscriber growth",
          "Outstanding invoices",
          "Operational insights",
        ],
      },
      {
        title: "Automation",
        items: [
          "Automated WhatsApp reminders",
          "Billing notifications",
          "Upcoming payment reminders",
        ],
      },
      {
        title: "System Configuration",
        items: [
          "Pricing management",
          "Tax configuration",
          "Notification settings",
          "Business preferences",
        ],
      },
    ],
    technicalHighlights: [
      "Role-Based Access Control",
      "PDF Invoice Generation",
      "WhatsApp Automation",
      "Real-Time Financial Tracking",
      "Responsive Dashboard Interface",
    ],
    impact: [
      "Reduced manual billing workflows",
      "Centralized subscriber management",
      "Improved payment collection visibility",
      "Automated customer reminder process",
      "Simplified monthly operations",
    ],
    screens: [
      {
        title: "Operations Dashboard",
        description:
          "Revenue analytics, collection status, unpaid invoices, and operational signals are surfaced in one dashboard for monthly decision-making.",
        image: shabakatDashboard,
      },
      {
        title: "Subscriber Management",
        description:
          "Search, filter, and manage subscriber records, account status, plans, and outstanding balances from one operational table.",
        image: shabakatSubscribers,
      },
      {
        title: "Invoice Generation",
        description:
          "Generate invoice statements, download PDF invoices, print records, and support recurring monthly billing workflows.",
        image: shabakatInvoices,
      },
      {
        title: "Area Management",
        description:
          "Organize subscribers by area, manage service zones, and keep operational assignments clearer across the business.",
        image: shabakatAreas,
      },
      {
        title: "Settings & Pricing",
        description:
          "Pricing management, tax configuration, notification settings, and business preferences live in the system configuration layer. A dedicated screenshot can be added here once you provide it.",
        image: shabakatSettings,
      },
      {
        title: "Login Experience",
        description:
          "Secure entry point designed around operations control, billing access, and a clean workspace for generator providers.",
        image: shabakatLogin,
      },
    ],
  },
];

export const getProjectDetailBySlug = (slug: string) =>
  projectDetails.find((project) => project.slug === slug);
