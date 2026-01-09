'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2, Loader2, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "36 hours of non-stop hacking",
  "Mentorship from industry experts",
  "Networking with like-minded innovators",
  "Free meals & refreshments",
  "Exciting prizes worth ₹2L+",
  "Certificates for all participants",
];

interface TeamMember {
  name: string;
}

export const RegisterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [memberCount, setMemberCount] = useState(1);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    leaderPhone: "",
    college: "",
    branch: "",
    year: "",
    members: [{ name: "" }] as TeamMember[],
  });

  const handleAddMember = () => {
    if (memberCount < 5) {
      setFormData(prev => ({
        ...prev,
        members: [...prev.members, { name: "" }]
      }));
      setMemberCount(memberCount + 1);
    }
  };

  const handleRemoveMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index)
    }));
    setMemberCount(memberCount - 1);
  };

  const handleMemberNameChange = (index: number, value: string) => {
    setFormData(prev => {
      const newMembers = [...prev.members];
      newMembers[index].name = value;
      return { ...prev, members: newMembers };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.teamName.trim()) {
        toast({ title: "Error", description: "Team name is required", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      if (!formData.leaderName.trim()) {
        toast({ title: "Error", description: "Team leader name is required", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      if (!formData.leaderPhone.trim()) {
        toast({ title: "Error", description: "Team leader phone number is required", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      if (!formData.college.trim()) {
        toast({ title: "Error", description: "College is required", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      if (!formData.branch.trim()) {
        toast({ title: "Error", description: "Branch is required", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      if (!formData.year) {
        toast({ title: "Error", description: "Year of study is required", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      const validMembers = formData.members.filter(m => m.name.trim());
      if (validMembers.length === 0) {
        toast({ title: "Error", description: "At least one team member name is required", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      // Simulate API call with dummy data
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock registration data for demonstration
      const registrationData = {
        team_name: formData.teamName,
        leader_name: formData.leaderName,
        leader_phone: formData.leaderPhone,
        college: formData.college,
        branch: formData.branch,
        year: formData.year,
        members: validMembers,
        registered_at: new Date().toISOString(),
      };

      console.log("Mock registration data:", registrationData);

      // Always succeed with dummy data
      toast({ title: "Success!", description: "Your team has been registered successfully!" });
      setIsOpen(false);
      setFormData({
        teamName: "",
        leaderName: "",
        leaderPhone: "",
        college: "",
        branch: "",
        year: "",
        members: [{ name: "" }],
      });
      setMemberCount(1);
    } catch (error) {
      toast({ title: "Error", description: "An unexpected error occurred", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card border-glow rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Ready to <span className="text-gradient">Hack?</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Don't miss your chance to be part of the biggest hackathon at MGIT.
                  Register now and showcase your innovation!
                </p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-left">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Registration Fee (Non-refundable)</div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-4">
                    ₹2500
                    <span className="text-lg text-muted-foreground font-normal"> / team</span>
                  </div>

                  <Button variant="hero" size="xl" className="w-full group" onClick={() => setIsOpen(true)}>
                    Register Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    Registration closes on Feb 5, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Register Your Team</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Team Information</h3>

              <div>
                <Label>Team Name</Label>
                <Input
                  placeholder="Enter your team name"
                  value={formData.teamName}
                  onChange={(e) => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Team Leader Information</h3>

              <div>
                <Label>Leader Name</Label>
                <Input
                  placeholder="Full name of team leader"
                  value={formData.leaderName}
                  onChange={(e) => setFormData(prev => ({ ...prev, leaderName: e.target.value }))}
                />
              </div>

              <div>
                <Label>Leader Phone Number</Label>
                <Input
                  placeholder="10-digit phone number"
                  type="tel"
                  maxLength={10}
                  value={formData.leaderPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, leaderPhone: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">College & Branch Details</h3>

              <div>
                <Label>College Name</Label>
                <Input
                  placeholder="Your college name"
                  value={formData.college}
                  onChange={(e) => setFormData(prev => ({ ...prev, college: e.target.value }))}
                />
              </div>

              <div>
                <Label>Branch</Label>
                <Input
                  placeholder="Your branch (e.g., CSE, ECE, IT, Mechanical)"
                  value={formData.branch}
                  onChange={(e) => setFormData(prev => ({ ...prev, branch: e.target.value }))}
                />
              </div>

              <div>
                <Label>Year of Study</Label>
                <Select value={formData.year} onValueChange={(value) => setFormData(prev => ({ ...prev, year: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Year">1st Year</SelectItem>
                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                    <SelectItem value="4th Year">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Team Members (Including Leader)</h3>
              <p className="text-sm text-muted-foreground">Add up to 5 team members</p>

              <div className="space-y-2">
                {formData.members.map((member, index) => (
                  <div key={index} className="flex gap-2 items-end">
                    <div className="flex-1">
                      <Label className="text-xs">Member {index + 1} Name</Label>
                      <Input
                        placeholder={index === 0 ? "Team leader name" : "Member name"}
                        value={member.name}
                        onChange={(e) => handleMemberNameChange(index, e.target.value)}
                      />
                    </div>
                    {formData.members.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveMember(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {memberCount < 5 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddMember}
                  className="w-full"
                >
                  + Add Team Member
                </Button>
              )}
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Registering...
                </>
              ) : (
                "Complete Registration"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
