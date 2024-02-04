const requiredVariables = [
  'CONTAINER_PROJECT_ID',
  'RAILWAY_API_ENDPOINT',
  'TRIAL_ACCOUNT_SERVICE_LIMIT',
  'RAILWAY_API_TOKEN'
] as const;

type EnvVariable = typeof requiredVariables[number];

class ProcessEnv {
  private variables: Map<EnvVariable, string>;

  constructor() {
    this.variables = new Map<EnvVariable, string>();
    this.loadEnvVariables();
  }

  private loadEnvVariables(): void {
    requiredVariables.forEach(variable => {
      const value = process.env[variable];
      this.variables.set(variable, value || "");

      if (!value) {
        console.warn(`Required env variable [${variable}] not supplied`);
      }
    });
  }

  public getVariable(name: EnvVariable): string {
    return this.variables.get(name) || "";
  }
}

const processEnv = new ProcessEnv()

export default processEnv;