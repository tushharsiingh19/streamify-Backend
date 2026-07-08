import dns from "dns/promises";

try {
    const result = await dns.resolveSrv(
        "_mongodb._tcp.backend.z8fg8oo.mongodb.net"
    );
    console.log(result);
} catch (err) {
    console.error(err);
}