import { db, Productos } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Productos).values([
		{id_producto:1,nombre_producto:"PC",precio:10000}
	])
}
