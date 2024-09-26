import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware();

export const config = {
  matcher: [
    // Публичные маршруты, например, все, что начинается с /api
    '/api/:path*',
    // Исключаем внутренние файлы Next.js и статические файлы    
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Все остальные маршруты, которые требуют авторизации
    '/(trpc)(.*)', // или любые другие маршруты, требующие проверки
  ],
}