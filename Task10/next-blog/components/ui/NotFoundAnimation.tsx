"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundAnimation() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <motion.h1
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-9xl font-black"
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-4xl font-bold">Blog Not Found</h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-600">
          The page youre looking for doesnt exist.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/" className="rounded-lg bg-black px-6 py-3 text-white">
            Home
          </Link>

          <Link href="/blog" className="rounded-lg border px-6 py-3">
            Blogs
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
