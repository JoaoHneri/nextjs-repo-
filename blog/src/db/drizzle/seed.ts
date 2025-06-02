import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from './index'; // Certifique-se do caminho correto
import { postsTable } from './schema';

(async () => {
    console.log('Starting seeding...');
    
    // Verificar se drizzleDb está definido
    if (!drizzleDb) {
        throw new Error('drizzleDb is not properly configured');
    }
    
    const jsonPostRepository = new JsonPostRepository();
    const posts = await jsonPostRepository.findAll();
    
    console.log(`Found ${posts.length} posts to seed`);
    
    // Limpar tabela antes de inserir (opcional)
    await drizzleDb.delete(postsTable);
    
    // Inserir posts
    const result = await drizzleDb.insert(postsTable).values(posts);
    
    console.log('Posts seeded successfully:', result);
    
})().catch((error) => {
    console.error('Error during seeding:', error);
    console.error('Stack trace:', error.stack);
}).finally(() => {
    console.log('Seeding completed.');
    process.exit(0); // Forçar saída do processo
});