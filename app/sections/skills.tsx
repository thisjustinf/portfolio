import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ReactElement } from "react";

type BadgeData = {
  title: string;
  iconClass: string;
};

const languages: BadgeData[] = [
  {
    title: "JavaScript",
    iconClass: "devicon-javascript-plain",
  },
  {
    title: "TypeScript",
    iconClass: "devicon-typescript-plain",
  },
  {
    title: "Python",
    iconClass: "devicon-python-plain",
  },
  {
    title: "Java",
    iconClass: "devicon-java-plain",
  },
  {
    title: "Go",
    iconClass: "devicon-go-original-wordmark",
  },
  {
    title: "Rust",
    iconClass: "devicon-rust-original",
  },
  {
    title: "Elixir",
    iconClass: "devicon-elixir-plain",
  },
  {
    title: "Bash",
    iconClass: "devicon-bash-plain",
  },
];

const frameworksAndLibraries: BadgeData[] = [
  {
    title: "React",
    iconClass: "devicon-react-original",
  },
  {
    title: "Next.js",
    iconClass: "devicon-nextjs-plain",
  },
  {
    title: "Angular",
    iconClass: "devicon-angular-plain",
  },
  {
    title: "Spring",
    iconClass: "devicon-spring-original",
  },
  {
    title: "Nestjs",
    iconClass: "devicon-nestjs-original",
  },
  {
    title: "FastAPI",
    iconClass: "devicon-fastapi-plain",
  },
  {
    title: "Phoenix",
    iconClass: "devicon-phoenix-original",
  },
];

const technologies: BadgeData[] = [
  {
    title: "Node.js",
    iconClass: "devicon-nodejs-plain",
  },
  {
    title: "gRPC",
    iconClass: "devicon-grpc-plain",
  },
  {
    title: "GraphQL",
    iconClass: "devicon-graphql-plain",
  },
  {
    title: "JSON",
    iconClass: "devicon-json-plain",
  },
  {
    title: "Git",
    iconClass: "devicon-git-plain",
  },
  {
    title: "Docker",
    iconClass: "devicon-docker-plain",
  },
  {
    title: "Kubernetes",
    iconClass: "devicon-kubernetes-plain",
  },
];

const databases: BadgeData[] = [
  {
    title: "PostgreSQL",
    iconClass: "devicon-postgresql-plain",
  },
  {
    title: "MongoDB",
    iconClass: "devicon-mongodb-plain",
  },
  {
    title: "Redis",
    iconClass: "devicon-redis-plain",
  },
  {
    title: "MySQL",
    iconClass: "devicon-mysql-original",
  },
  {
    title: "SQLite",
    iconClass: "devicon-sqlite-plain",
  },
];

const SkillCategory = ({
  title,
  items,
}: {
  title: string;
  items: BadgeData[];
}): ReactElement => (
  <Card className="w-full mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {items.map(
          (item: BadgeData): ReactElement => (
            <Badge
              key={item.title}
              variant="secondary"
              className="px-3 py-1 text-sm hover:bg-secondary/80 transition-colors cursor-default flex items-center gap-2"
            >
              <i className={`${item.iconClass} text-lg`}></i>
              {item.title}
            </Badge>
          ),
        )}
      </div>
    </CardContent>
  </Card>
);

export default function Skills(): ReactElement {
  return (
    <section id="skills" className="container">
      <h2 className="text-3xl font-bold tracking-tight mb-8">
        Skills & Technologies
      </h2>

      <SkillCategory title="Programming Languages" items={languages} />
      <SkillCategory
        title="Frameworks & Libraries"
        items={frameworksAndLibraries}
      />
      <SkillCategory title="Technologies" items={technologies} />
      <SkillCategory title="Databases" items={databases} />
    </section>
  );
}
