"use client";

import { useState, useMemo } from "react";
import ProfileCard from "@/components/ProfileCard";
import LinkButton from "@/components/LinkButton";
import ThemeToggle from "@/components/ThemeToggle";
import SearchBar from "@/components/SearchBar";
import SearchTips from "@/components/SearchTips";
import { profileConfig, socialLinks, siteConfig } from "@/data/config";
import { filterLinks } from "@/utils/searchUtils";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter links based on search query
  const filteredLinks = useMemo(() => {
    return filterLinks(socialLinks, searchQuery);
  }, [searchQuery]);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 bg-pattern transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Profile Section */}
        <ProfileCard profile={profileConfig} />

        {/* Search Tips */}
        <SearchTips searchQuery={searchQuery} totalLinks={socialLinks.length} />

        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalLinks={socialLinks.length}
          filteredLinks={filteredLinks.length}
        />

        {/* Links Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="space-y-4 ">
            {searchQuery ? (
              // Show filtered results
              filteredLinks.length > 0 ? (
                filteredLinks.map((link, index) => {
                  const originalIndex = socialLinks.findIndex(
                    (l) => l.id === link.id
                  );
                  return (
                    <LinkButton
                      key={link.id}
                      link={link}
                      index={index}
                      searchQuery={searchQuery}
                      isFiltered={true}
                    />
                  );
                })
              ) : (
                // No results found
                <div className="text-center py-12 animate-fade-in">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No links found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    Try searching with different keywords
                  </p>
                </div>
              )
            ) : (
              // Show all links
              socialLinks.map((link, index) => (
                <LinkButton
                  key={link.id}
                  link={link}
                  index={index}
                  searchQuery={searchQuery}
                  isFiltered={false}
                />
              ))
            )}
          </div>

          {/* Search Results Summary */}
          {searchQuery && filteredLinks.length > 0 && (
            <div className="text-center mt-8 animate-fade-in">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing {filteredLinks.length} of {socialLinks.length} links
              </p>
            </div>
          )}

          {/* Footer */}
          <footer className="text-center mt-12 pb-8">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p className="mb-2">Made with ❤️ using AjitTree</p>
              <p>
                Built with{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Tailwind CSS
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </div>
  );
}
