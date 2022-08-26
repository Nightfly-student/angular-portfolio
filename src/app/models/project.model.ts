export default interface IProject {
  id?: string,
  docID?: string;
  name: string;
  description: string;
  screenshot: string;
  type: string;
  languages: string;
  github?: string;
  url?: string;
}
