import styles from './Student.module.css';

function Student(props) {
    const { studentinfo } = props;

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.header}>Name</th>
                        <th className={styles.header}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {studentinfo.map((student, index) => (
                        <tr key={index}>
                            <td className={styles.cell}>{student.name}</td>
                            <td className={styles.cell}>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Student;
