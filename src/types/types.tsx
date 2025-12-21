// =================================================================
// TYPE DEFINITIONS
// =================================================================

export interface RiskItem {
    title: string;
    numbers: number;
    nextNumber: string;
    description: string;
}

export interface Course {
    title: string;
    description: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    slug: string;
    icon: string;
}

export interface CourseCardProps {
    course: Course;
}

// =================================================================
// STUB COMPONENTS (Typed)
// =================================================================

export interface ImageProps {
    src: string;
    alt: string;
    className: string;
    height: number;
    width: number;
}

export interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export interface AnimatedNumProps {
    to: number;
    nextNumber: string;
}

export interface EncryptedTextProps {
    text: string;
    revealedClassName: string;
}

export interface CourseDetailProps {
    title: string;
    description: string;
    duration: string;
    focus: string;
}