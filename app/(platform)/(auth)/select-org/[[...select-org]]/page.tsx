import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/dashboard/:id"
      afterCreateOrganizationUrl="/dashboard/:id"
    />
  );
}
