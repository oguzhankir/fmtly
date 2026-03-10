const PROXY_BASE = 'https://workers.fmtly.dev';

export type IpInfo = {
    ip: string;
    city: string;
    region: string;
    country_name: string;
    country: string;
    postal: string;
    latitude: number;
    longitude: number;
    timezone: string;
    org: string;
    asn: string;
    error?: string;
};

export type DnsAnswer = {
    name: string;
    type: number;
    TTL: number;
    data: string;
};

export type DnsResponse = {
    Status: number;
    Answer?: DnsAnswer[];
};

export type DnsRecords = Record<'A' | 'AAAA' | 'MX' | 'TXT' | 'CNAME' | 'NS' | 'SOA', DnsResponse>;

export async function lookupIp(ip: string): Promise<IpInfo> {
    try {
        const res = await fetch(`${PROXY_BASE}?action=ip&target=${encodeURIComponent(ip)}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
    } catch (e) {
        return {
            ip,
            city: '',
            region: '',
            country_name: '',
            country: '',
            postal: '',
            latitude: 0,
            longitude: 0,
            timezone: '',
            org: '',
            asn: '',
            error: e instanceof Error ? e.message : 'Lookup failed'
        };
    }
}

export async function lookupDns(domain: string): Promise<DnsRecords> {
    try {
        const res = await fetch(`${PROXY_BASE}?action=dns&target=${encodeURIComponent(domain)}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
    } catch {
        const empty: DnsResponse = { Status: -1 };
        return { A: empty, AAAA: empty, MX: empty, TXT: empty, CNAME: empty, NS: empty, SOA: empty };
    }
}
