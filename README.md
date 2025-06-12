I. CƠ BẢN (Beginner)
| Chủ đề              | Nội dung                                                           |
| ------------------- | ------------------------------------------------------------------ |
| Cài đặt             | Cài PostgreSQL bằng Docker hoặc native                             |
| Kết nối             | DBeaver, pgAdmin, CLI (`psql`)                                     |
| Câu lệnh SQL cơ bản | `SELECT`, `INSERT`, `UPDATE`, `DELETE`                             |
| Quản lý bảng        | `CREATE TABLE`, `DROP`, `ALTER`, `CONSTRAINT`                      |
| Kiểu dữ liệu        | `INT`, `TEXT`, `BOOLEAN`, `TIMESTAMP`, `JSON`, `ARRAY`, `UUID`,... |
| Quan hệ             | `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`                 |
| Index cơ bản        | `CREATE INDEX`, `UNIQUE INDEX`                                     |
| Backup/Restore      | `pg_dump`, `pg_restore`, SQL dump                                  |

II. TRUNG CẤP (Intermediate)
| Chủ đề                      | Nội dung                                                   |
| --------------------------- | ---------------------------------------------------------- |
| JOIN                        | `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN` |
| View, Materialized View     | Tạo view, cache dữ liệu tạm                                |
| Subquery                    | Trong `SELECT`, `WHERE`, `EXISTS`                          |
| CTE                         | `WITH ... AS (...)`, đệ quy                                |
| Trigger                     | Tạo trigger với `BEFORE`, `AFTER`, `INSTEAD OF`            |
| Function (Stored Procedure) | `CREATE FUNCTION`, `RETURN`, PL/pgSQL                      |
| Transaction                 | `BEGIN`, `COMMIT`, `ROLLBACK`                              |
| Isolation Level             | READ COMMITTED, REPEATABLE READ, SERIALIZABLE              |
| Index nâng cao              | `GIN`, `BTREE`, `HASH`, `GiST`                             |

III. NÂNG CAO (Advanced)
| Chủ đề              | Nội dung                                    |
| ------------------- | ------------------------------------------- |
| Explain & Analyze   | Phân tích hiệu năng câu truy vấn            |
| Tối ưu chỉ mục      | Khi nào nên dùng, dùng loại index nào       |
| Partition Table     | Chia bảng theo range, list, hash            |
| WAL & Replication   | Write Ahead Log, streaming replication      |
| Logical Replication | Realtime dữ liệu giữa nhiều server          |
| JSON/JSONB nâng cao | Truy vấn dữ liệu JSON, indexing JSONB       |
| Full Text Search    | Dùng `tsvector`, `tsquery`, `to_tsvector()` |
| Parallel Query      | Tối ưu các truy vấn lớn                     |

 IV. TỐI ƯU & TRIỂN KHAI (Performance & Deployment)
| Chủ đề             | Nội dung                                      |
| ------------------ | --------------------------------------------- |
| Connection Pooling | Dùng `pgbouncer`, `HikariCP`, `pool`          |
| Cấu hình file      | `postgresql.conf`, `pg_hba.conf`              |
| Autovacuum         | VACUUM, ANALYZE, autovacuum tuning            |
| Monitoring         | `pg_stat_activity`, `pg_stat_user_tables`     |
| Security           | Roles, GRANT/REVOKE, SSL, password encryption |
| Backup nâng cao    | PITR (Point-in-time Recovery), logical dump   |
| Docker/Compose     | Chạy DB sản xuất bằng Docker                  |
| Multi-Tenant       | Dùng schema hoặc row-level security           |





