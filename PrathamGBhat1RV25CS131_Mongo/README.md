# Smart Campus Hub - MongoDB Schema Design

## Embedding vs Reference links

| Relationship | Approach | Why |
|---|---|---|
| User → Bookmarks | **Embed** | Small data, user-specific, frequently accessed together |
| User → Applications | **Reference** | Independent lifecycle, multiple query patterns |
| Opportunity → Creator | **Reference** | User can be updated independently |
| Opportunity → Comments | **Embed** | Exclusive to opportunity, always fetched together |
| Opportunity → Trending Score | **Embed** | Frequently queried, small data, denormalized for performance |
| Comment → Author | **Reference** | User profile updates independently |
