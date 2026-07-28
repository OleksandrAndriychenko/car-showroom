import { CommentFormData, commentSchema } from "@features/add-comment/model/commentSchema";
import { useCommentsStore } from "@features/add-comment/model/useCommentsStore";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './AddCommentForm.module.css';
import { Input } from "@shared/ui/Input/Input";
import clsx from "clsx";
import { Button } from "@shared/ui/Button/Button";

interface AddCommentFormProps {
    vehicleId: number;
}

export const AddCommentsForm = ({ vehicleId }: AddCommentFormProps) => {
    const addComment = useCommentsStore((state) => state.addComment);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CommentFormData>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            author: '',
            rating: 5,
            text: '',
        },
    });

    const onSubmit = (data: CommentFormData) => {
        addComment({
            vehicleId,
            author: data.author,
            rating: Number(data.rating),
            text: data.text,
        });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h4 className={styles.title}>Залишити відгук</h4>
            <Input
                label="Ваше ім'я"
                placeholder="Іван Іванов"
                error={errors.author?.message}
                {...register('author')}
            />
            <div className={styles.field}>
                <label className={styles.label}>Оцінка</label>
                <select 
                    className={clsx(styles.select, errors.rating && styles.hasError)}
                    {...register('rating', { valueAsNumber: true })}
                >
                    <option value={5}>5 ★★★★★ (Чудово)</option>
                    <option value={4}>4 ★★★★☆ (Добре)</option>
                    <option value={3}>3 ★★★☆☆ (Задовільно)</option>
                    <option value={2}>2 ★★☆☆☆ (Погано)</option>
                    <option value={1}>1 ★☆☆☆☆ (Жахливо)</option>
                </select>
                {errors.rating && <span className={styles.error}>{errors.rating.message}</span>}
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Ваш відгук</label>
                <textarea
                    className={clsx(styles.textarea, errors.text && styles.hasError)}
                    placeholder="Поділіться своїми враженнями про автомобіль..."
                    {...register('text')}
                />
                {errors.text && <span className={styles.error}>{errors.text.message}</span>}
            </div>

            <Button type='submit' variant='accent' isLoading={isSubmitting}>
                Надіслати відгук
            </Button>
        </form>
    )
}