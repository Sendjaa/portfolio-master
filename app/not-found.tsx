import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 md:px-10">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">404</h1>
      <p className="text-lg md:text-2xl text-white/70 mb-8 text-center max-w-xl">
        Halaman yang kamu cari tidak ditemukan. Mungkin sudah dipindahkan atau URL-nya salah.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#4ade80] text-black font-bold rounded-full hover:bg-[#86efac] transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
