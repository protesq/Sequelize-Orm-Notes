# MySQL Sequelize ORM

MySQL veritabanı ile Sequelize ORM kullanımını gösteren basit bir Node.js projesi.

## Kurulum

```bash
npm install sequelize mysql2
# or
yarn add sequelize mysql2
```

Projeyi klonladıysan:

```bash
npm install
```

## Ortam Değişkenleri

`.env.example` dosyasını `.env` olarak kopyalayıp değerleri doldurun:

```bash
cp .env.example .env
```

Gerekli değişkenler:

| Değişken | Açıklama |
|----------|----------|
| `DB_HOST` | Veritabanı sunucu adresi |
| `DB_USER` | Veritabanı kullanıcı adı |
| `DB_PASSWORD` | Veritabanı şifresi |
| `DB_NAME` | Veritabanı adı |

## Çalıştırma

```bash
node main.js
```

## Kullanılan Teknolojiler

- **Node.js** (ESM)
- **Sequelize** v6 — ORM
- **mysql2** — MySQL driver
