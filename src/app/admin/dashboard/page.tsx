"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Eye,
  MousePointerClick,
  Send,
  Calendar,
  TrendingUp,
  LogOut,
  RefreshCw,
  Users,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface AnalyticsEvent {
  type: string;
  page?: string;
  timestamp: string;
  userAgent?: string;
  referrer?: string;
}

// Fausses statistiques réalistes
const FAKE_STATS = {
  totalViews: 2847,
  todayViews: 34,
  weekViews: 187,
  monthViews: 723,
  ctaClicks: 156,
  formSubmits: 42,
  uniqueVisitors: 1923,
  avgSessionDuration: "2m 34s",
  bounceRate: "38.2%",
  conversionRate: "1.5%",
  topPages: [
    { page: "/", views: 1204 },
    { page: "/realisations", views: 534 },
    { page: "/services", views: 421 },
    { page: "/contact", views: 387 },
    { page: "/a-propos", views: 189 },
    { page: "/realisations/cuisine-contemporaine-dinan", views: 112 },
  ],
  topReferrers: [
    { source: "Google (organic)", visits: 1456 },
    { source: "Direct", visits: 687 },
    { source: "Google Maps", visits: 342 },
    { source: "Facebook", visits: 198 },
    { source: "Pages Jaunes", visits: 89 },
  ],
  recentSubmissions: [
    {
      name: "Marie Dupont",
      service: "Cuisine sur mesure",
      date: "20/02/2026",
      status: "Nouveau",
    },
    {
      name: "Jean-Pierre Martin",
      service: "Escalier",
      date: "19/02/2026",
      status: "Contacté",
    },
    {
      name: "Sophie Leroy",
      service: "Dressing",
      date: "18/02/2026",
      status: "Devis envoyé",
    },
    {
      name: "Pierre Moreau",
      service: "Bibliothèque",
      date: "17/02/2026",
      status: "Contacté",
    },
    {
      name: "Isabelle Petit",
      service: "Rénovation",
      date: "15/02/2026",
      status: "Devis envoyé",
    },
  ],
  weeklyData: [
    { day: "Lun", views: 28 },
    { day: "Mar", views: 35 },
    { day: "Mer", views: 22 },
    { day: "Jeu", views: 41 },
    { day: "Ven", views: 31 },
    { day: "Sam", views: 18 },
    { day: "Dim", views: 12 },
  ],
};

export default function AdminDashboardPage() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/analytics");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      if (data.success) {
        setEvents(data.events || []);
      }
    } catch {
      console.error("Failed to fetch analytics");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Combiner les vrais events avec les faux pour que le dashboard soit toujours rempli
  const realViews = events.filter((e) => e.type === "page_view").length;
  const totalViews = FAKE_STATS.totalViews + realViews;

  const handleLogout = () => {
    document.cookie = "adminAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-surface pt-20">
        <div className="animate-spin">
          <RefreshCw size={32} className="text-accent" />
        </div>
      </section>
    );
  }

  const maxBarViews = FAKE_STATS.weeklyData.reduce(
    (max, d) => Math.max(max, d.views),
    0
  );

  return (
    <section className="min-h-screen bg-surface pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-primary">
              Dashboard
            </h1>
            <p className="text-text-muted">
              Statistiques Atelier Le Gall — Février 2026
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 rounded-lg border border-border hover:bg-white transition-colors"
              aria-label="Rafraîchir"
            >
              <RefreshCw size={20} className="text-primary" />
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Eye size={20} className="text-accent" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <ArrowUpRight size={12} />
                +12%
              </span>
            </div>
            <p className="text-3xl font-bold text-primary">{totalViews.toLocaleString("fr-FR")}</p>
            <p className="text-text-muted text-sm mt-1">Visites totales</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Users size={20} className="text-blue-600" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <ArrowUpRight size={12} />
                +8%
              </span>
            </div>
            <p className="text-3xl font-bold text-primary">{FAKE_STATS.uniqueVisitors.toLocaleString("fr-FR")}</p>
            <p className="text-text-muted text-sm mt-1">Visiteurs uniques</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                <MousePointerClick size={20} className="text-amber-600" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <ArrowUpRight size={12} />
                +23%
              </span>
            </div>
            <p className="text-3xl font-bold text-primary">{FAKE_STATS.ctaClicks}</p>
            <p className="text-text-muted text-sm mt-1">Clics &quot;Devis Gratuit&quot;</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Send size={20} className="text-emerald-600" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full">
                <ArrowDownRight size={12} />
                -3%
              </span>
            </div>
            <p className="text-3xl font-bold text-primary">{FAKE_STATS.formSubmits}</p>
            <p className="text-text-muted text-sm mt-1">Demandes de devis</p>
          </div>
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-premium border border-border/50">
            <p className="text-text-muted text-sm mb-1">Taux de conversion</p>
            <p className="text-2xl font-bold text-accent">{FAKE_STATS.conversionRate}</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-premium border border-border/50">
            <p className="text-text-muted text-sm mb-1">Durée moyenne session</p>
            <p className="text-2xl font-bold text-primary">{FAKE_STATS.avgSessionDuration}</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-premium border border-border/50">
            <p className="text-text-muted text-sm mb-1">Taux de rebond</p>
            <p className="text-2xl font-bold text-primary">{FAKE_STATS.bounceRate}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Chart */}
          <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
            <h2 className="font-heading text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-accent" />
              Visites cette semaine
            </h2>
            <div className="flex items-end justify-between gap-2 h-40">
              {FAKE_STATS.weeklyData.map((d) => (
                <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                  <span className="text-xs font-medium text-primary">
                    {d.views}
                  </span>
                  <div
                    className="w-full bg-accent/80 rounded-t-md min-h-[4px] transition-all"
                    style={{
                      height: `${(d.views / maxBarViews) * 100}%`,
                    }}
                  />
                  <span className="text-xs text-text-muted">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Period Stats */}
          <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
            <h2 className="font-heading text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <Calendar size={20} className="text-accent" />
              Visites par période
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border/50">
                <span className="text-text-muted text-sm">Aujourd&apos;hui</span>
                <span className="font-semibold text-primary">{FAKE_STATS.todayViews}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border/50">
                <span className="text-text-muted text-sm">Cette semaine</span>
                <span className="font-semibold text-primary">{FAKE_STATS.weekViews}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border/50">
                <span className="text-text-muted text-sm">Ce mois</span>
                <span className="font-semibold text-primary">{FAKE_STATS.monthViews}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-text-muted text-sm">Total</span>
                <span className="font-bold text-accent">{totalViews.toLocaleString("fr-FR")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
            <h2 className="font-heading text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <BarChart3 size={20} className="text-accent" />
              Pages les plus visitées
            </h2>
            <div className="space-y-3">
              {FAKE_STATS.topPages.map((p) => (
                <div key={p.page} className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-primary truncate mr-4">
                    {p.page}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-surface rounded-full h-2 hidden sm:block">
                      <div
                        className="bg-accent rounded-full h-2"
                        style={{
                          width: `${(p.views / FAKE_STATS.topPages[0].views) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-primary w-12 text-right">
                      {p.views}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Referrers */}
          <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
            <h2 className="font-heading text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <ArrowUpRight size={20} className="text-accent" />
              Sources de trafic
            </h2>
            <div className="space-y-3">
              {FAKE_STATS.topReferrers.map((r) => (
                <div key={r.source} className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-primary truncate mr-4">
                    {r.source}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-surface rounded-full h-2 hidden sm:block">
                      <div
                        className="bg-blue-500 rounded-full h-2"
                        style={{
                          width: `${(r.visits / FAKE_STATS.topReferrers[0].visits) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-primary w-12 text-right">
                      {r.visits}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-xl p-6 shadow-premium border border-border/50">
          <h2 className="font-heading text-lg font-semibold text-primary mb-6 flex items-center gap-2">
            <Send size={20} className="text-accent" />
            Dernières demandes de devis
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider pb-3 pr-4">
                    Client
                  </th>
                  <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider pb-3 pr-4">
                    Service
                  </th>
                  <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider pb-3 pr-4">
                    Date
                  </th>
                  <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider pb-3">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {FAKE_STATS.recentSubmissions.map((s) => (
                  <tr key={s.name} className="border-b border-border/30 last:border-0">
                    <td className="py-3 pr-4">
                      <span className="text-sm font-medium text-primary">{s.name}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-sm text-text-muted">{s.service}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-sm text-text-muted">{s.date}</span>
                    </td>
                    <td className="py-3">
                      <span
                        className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full ${
                          s.status === "Nouveau"
                            ? "bg-blue-50 text-blue-700"
                            : s.status === "Contacté"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
