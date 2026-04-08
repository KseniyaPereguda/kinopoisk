import { type ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import styles from "./MoviesPagination.module.css";

type Props = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    showTotal?: boolean;
    totalResults?: number;
}

export const MoviesPagination = ({
                                     totalPages,
                                     currentPage,
                                     onPageChange,
                                     showTotal = false,
                                     totalResults
                                 }: Props) => {
    const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
        onPageChange(page);
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    };

    if (totalPages <= 1) {
        return showTotal && totalResults ? (
            <div className={styles.totalCount}>
                <Typography variant="caption">Total: {totalResults}</Typography>
            </div>
        ) : null;
    }

    return (
        <div className={styles.container}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                color="primary"
                className={styles.pagination}
                size="medium"
                showFirstButton
                showLastButton
            />

            {showTotal && totalResults && (
                <div className={styles.totalCount}>
                    <Typography variant="caption">Total movies: {totalResults}</Typography>
                </div>
            )}
        </div>
    );
};