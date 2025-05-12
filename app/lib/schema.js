import { z } from "zod";

export const onboardingSchema = z.object({
    industry: z.string({ required_error: "Industry is required" }),
    subIndustry: z.string({ required_error: "Sub-industry is required" }),
    bio: z.string().max(500).optional(),
    experience: z.string().transform((val) => parseInt(val, 10)).pipe(z.number().min(0, "Experience must be at least 0").max(100, "Experience must be less than 100")),
    skills: z.string().transform((val) => val ? val.split(',').map((skill) => skill.trim()).filter(Boolean) : undefined),
});
