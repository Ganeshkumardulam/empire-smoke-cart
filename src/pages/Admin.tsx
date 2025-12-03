import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Admin = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Manage your Empire Smoke store</p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Admin Panel</CardTitle>
            <CardDescription>Administrative features are not available in the current backend implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">
                The backend API does not currently provide admin endpoints for dashboard statistics, order management, or product administration.
              </p>
              <p className="text-sm text-muted-foreground">
                This page is a placeholder for future admin functionality.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
