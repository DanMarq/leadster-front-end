import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/videos.json', 'utf8');
    const cleanedContents = fileContents.replace(/\r\n/g, '');
    const videos = JSON.parse(cleanedContents);
    res.status(200).json(videos);
  } catch (error) {
    console.error('Houve um erro:', error);
    res.status(500).json({ error: 'Erro ao buscar os vídeos' });
  }
}
