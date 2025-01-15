/**
 * Demande d'un client: "Nous voulons changer le domaine de tous les utilisateurs"
 *
 * Descriptif de l'environnement:
 * - 1 provider externe qui gère les utilisateurs (ex: firebase, auth0...)
 * - 1 base de données interne qui stocke les utilisateurs
 *
 * L'objectif est de mettre à jour le domaine de tous les utilisateurs dans les deux systèmes.
 *
 * Setup du test :
 * - La liste des emails est stockée dans la variable `emails`
 * - Les appels au provider et a la base de donnée sont simulés avec un délai de 200ms
 */

const emails = []

class ProviderClient {
  updateUser(args: { email: string, emailUpdate: string }) {
    // Simulate an API call with 200ms delay
    return new Promise((resolve) => setTimeout(() => resolve('ok'), 200));
  }
}

class DatabaseClient {
  updateUser(args: { email: string, emailUpdate: string }) {
    // Simulate an API call with 200ms delay
    return new Promise((resolve) => setTimeout(() => resolve('ok'), 200));
  }
}

async function main() {
  const providerClient = new ProviderClient();
  const databaseClient = new DatabaseClient();

  for (const email of emails) {
    const emailUpdate = email.replace('.fr', '.com');
    await databaseClient.updateUser({ email, emailUpdate });
    await providerClient.updateUser({ email, emailUpdate });
  }
}