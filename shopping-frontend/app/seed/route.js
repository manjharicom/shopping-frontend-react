import bcrypt from 'bcrypt';
import sql from 'mssql';
import { config } from '../lib/data';

async function seedUsers() {
    try{
        const pool = await sql.connect(config);
        const hashedPassword = await bcrypt.hash('Beg0ra2308', 10);
        await pool.query(`INSERT INTO users (name, email, password)
          VALUES ('John Harry', 'john@manjhari.com', '${hashedPassword}')`);
    } catch (error) {
        console.error('Database Error seeding users:', error);
    } finally {
      //sql.close();
    }
}

export async function GET() {
  try{
    seedUsers();
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
      return Response.json({ error }, { status: 500 });
  }
}