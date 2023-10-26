import { PrismaClient } from '@prisma/client'
import countries from './countries.json'
const prisma = new PrismaClient()

export async function main() {   
    await Promise.all((countries as Array<{name: string, code: string}>).map(async ({name, code}) => {
        await prisma.country.create({
            data: {
                 name
            }
        })
    }))
}