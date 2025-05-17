import { readFileSync } from 'fs';
import { join } from 'path';

export function readCsv(fileName: string) {
  try {
    const filePath = join(__dirname, `../data/${fileName}.csv`);
    const content = readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
