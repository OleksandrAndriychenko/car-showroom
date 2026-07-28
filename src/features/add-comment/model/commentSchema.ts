import { z } from 'zod';

export const commentSchema = z.object({
    author: z
        .string()
        .min(2, 'Ім\'я має містити щонайменше 2 символи')
        .max(50, 'Ім\'я не повинно перевищувати 50 символів'),
    rating: z
        .number({ message: 'Оберіть оцінку' })
        .min(1, 'Мінімальна оцінка — 1')
        .max(5, 'Максимальна оцінка — 5'),
    text: z.
        string()
        .min(5, 'Текст відгуку має містити щонайменше 5 символів')
        .max(500, 'Текст відгуку не повинен перевищувати 500 символів'),
});

export type CommentFormData = z.infer<typeof commentSchema>;
