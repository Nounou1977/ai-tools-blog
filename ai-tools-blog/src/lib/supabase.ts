import { createClient } from '@supabase/supabase-js';
import { API_CONFIG } from '@/config/api.config';

// Client Supabase pour l'application
export const supabase = createClient(
  API_CONFIG.supabase.url,
  API_CONFIG.supabase.anonKey
);

// Types pour la base de donnees
export interface Client {
  id: string;
  email: string;
  nom: string | null;
  prenom: string | null;
  stripe_customer_id: string | null;
  date_inscription: string;
  updated_at: string;
}

export interface Commande {
  id: string;
  client_id: string;
  montant: number;
  devise: string;
  statut: string;
  stripe_payment_id: string | null;
  stripe_session_id: string | null;
  date_commande: string;
  date_livraison: string | null;
  produit_livre: boolean;
}

export interface Produit {
  id: string;
  nom: string;
  description: string | null;
  prix: number;
  type_produit: string | null;
  fichiers_json: string | null;
  actif: boolean;
  date_creation: string;
}

export interface Analytics {
  id: string;
  event_type: string;
  client_id: string | null;
  commande_id: string | null;
  data_json: string | null;
  timestamp: string;
}

export interface EmailLog {
  id: string;
  client_id: string;
  commande_id: string | null;
  type_email: string;
  sujet: string | null;
  statut: string;
  date_envoi: string;
  date_ouverture: string | null;
  date_clic: string | null;
}
