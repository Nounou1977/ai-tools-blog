#!/bin/bash

# 🚀 Script de Déploiement Vercel - Site de Vente Prompts IA
# Usage: ./deploy-vercel.sh

set -e  # Exit on any error

echo "🚀 Déploiement Site de Vente Prompts IA vers Vercel..."

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction d'affichage avec couleurs
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérification des prérequis
check_prerequisites() {
    print_status "Vérification des prérequis..."
    
    # Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js n'est pas installé. Installez Node.js 18+ d'abord."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt "18" ]; then
        print_error "Node.js version 18+ requise. Version actuelle: $(node --version)"
        exit 1
    fi
    
    # NPM
    if ! command -v npm &> /dev/null; then
        print_error "npm n'est pas installé."
        exit 1
    fi
    
    # Vercel CLI
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI non installé. Installation..."
        npm install -g vercel
    fi
    
    print_success "Prérequis vérifiés ✅"
}

# Nettoyage et installation
clean_and_install() {
    print_status "Nettoyage et installation des dépendances..."
    
    # Nettoyer le cache
    rm -rf node_modules package-lock.json
    rm -rf dist .vite
    
    # Installer les dépendances
    npm install
    print_success "Dépendances installées ✅"
}

# Build de production
build_project() {
    print_status "Build de production..."
    
    # Vérifier si .env.local existe
    if [ ! -f ".env.local" ]; then
        if [ -f ".env" ]; then
            print_warning "Copy .env vers .env.local..."
            cp .env .env.local
        else
            print_warning "Aucun fichier .env trouvé. Copie env.example..."
            cp env.example .env.local
        fi
    fi
    
    # Build
    npm run build
    
    # Vérifier que le build a réussi
    if [ ! -d "dist" ]; then
        print_error "Le build a échoué - dossier dist non créé"
        exit 1
    fi
    
    print_success "Build de production réussi ✅"
    ls -la dist/
}

# Déploiement Vercel
deploy_vercel() {
    print_status "Déploiement sur Vercel..."
    
    # Vérifier la connexion Vercel
    if ! vercel whoami &> /dev/null; then
        print_warning "Non connecté à Vercel. Connexion..."
        vercel login
    fi
    
    # Déploiement de production
    vercel --prod
    
    print_success "Déploiement terminé ✅"
}

# Main execution
main() {
    echo ""
    echo "💰 ==============================="
    echo "🚀 Site de Vente - Déploiement Vercel"
    echo "💰 ==============================="
    echo ""
    
    check_prerequisites
    clean_and_install
    build_project
    deploy_vercel
    
    echo ""
    print_success "🎉 Déploiement Site de Vente terminé avec succès!"
    echo ""
    echo "🌐 Votre site de vente est maintenant en ligne sur Vercel"
    echo "💰 URL Gumroad: https://aiexperthub.gumroad.com/l/tnpyxi"
    echo "📊 Consultez les métriques sur https://vercel.com/dashboard"
    echo ""
    echo "📝 Prochaines étapes:"
    echo "1. Configurer Google Analytics"
    echo "2. Soumettre à Google Search Console"
    echo "3. Configurer votre domaine custom"
    echo "4. Tester les conversions Gumroad"
    echo ""
}

# Exécution principale
main "$@"
