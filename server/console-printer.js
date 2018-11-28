import Fiber from 'fibers';

const mega = 1024 * 1024;
const start = new Date();

/**
 * Print process memory usage with consistent spacing between values to make it easy to compare them for each line entry
 */
export function prettyPrintMemoryUsage() {
    const elapsed = `${Math.floor((new Date() - start) / 1000)}s         `.substring(0, 10);
    const memoryUsage = process.memoryUsage();
    memoryUsage.rss = `${Math.floor(memoryUsage.rss / mega)}mb         `.substring(0, 10);
    memoryUsage.heapTotal = `${Math.floor(memoryUsage.heapTotal / mega)}mb         `.substring(0, 10);
    memoryUsage.heapUsed = `${Math.floor(memoryUsage.heapUsed / mega)}mb         `.substring(0, 10);
    memoryUsage.external = `${Math.floor(memoryUsage.external / mega)}mb         `.substring(0, 10);
    console.log(`elapsed: ${elapsed}rss: ${memoryUsage.rss}heapTotal: ${memoryUsage.heapTotal}heapUsed: ${memoryUsage.heapUsed}external: ${memoryUsage.external}fibers: ${Fiber.fibersCreated}`);
}